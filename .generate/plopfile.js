module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
        description: "Descricao",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{dashCase name}}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{dashCase name}}/{{dashCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{dashCase name}}/{{dashCase name}}.stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{dashCase name}}/{{dashCase name}}.spec.tsx",
        templateFile: "templates/test.tsx.hbs",
      },
      {
        type: "append",
        path: "../src/components/index.ts",
        pattern: "",
        template: "export * from './{{dashCase name}}';",
        separator: ""
      },
    ],
  })
}
