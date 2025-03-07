interface User {
  name: string
  email: string
  avatar: string
}

interface NavUserProps {
  user: User
}

export function NavUser({ user }: NavUserProps) {
  return (
    <div className="flex items-center gap-3 px-2">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img
          src={user.avatar || "/placeholder.svg?height=32&width=32"}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="overflow-hidden">
        <p className="font-medium text-sm text-slate-800 truncate">{user.name}</p>
        <p className="text-xs text-slate-500 truncate">{user.email}</p>
      </div>
    </div>
  )
}

