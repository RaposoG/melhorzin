import type { ActionImpl } from 'kbar';
import { KBarResults, useMatches } from 'kbar';
import { type LottieComponentProps } from 'lottie-react';
import { forwardRef, type ReactElement, type Ref } from 'react';
import {
  ActionRow,
  GroupName,
  Kbd,
  ResultStyle,
  Shortcut,
  StyledAction
} from './styles';

export const RenderResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
};

interface TAction extends ActionImpl {
  icon: ReactElement<LottieComponentProps>;
}

interface ResultItemProps {
  action: TAction;
  active: boolean;
}

const ResultItem = forwardRef(
  ({ action, active }: ResultItemProps, ref: Ref<HTMLDivElement>) => {
    if (active) {
      action.icon.props.lottieRef?.current?.play();
    } else {
      action.icon.props.lottieRef?.current?.stop();
    }
    return (
      <ResultStyle ref={ref} active={active}>
        <StyledAction>
          {action.icon && action.icon}
          <ActionRow>
            <span>{action.name}</span>
          </ActionRow>
        </StyledAction>
        {action.shortcut?.length && (
          <Shortcut aria-hidden>
            {action.shortcut.map((shortcut: string) => (
              <Kbd key={shortcut}>{shortcut}</Kbd>
            ))}
          </Shortcut>
        )}
      </ResultStyle>
    );
  }
);

ResultItem.displayName = 'ResultItem';
