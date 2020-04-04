export interface Chat {
  image: string,
  name: string,
  last: {
    message: string,
    time: string,
    readStatus?: string
  },
  status?: {
    muted?: boolean,
    pined?: boolean,
    unreadCount?: number
  }
}
