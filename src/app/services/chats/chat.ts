export interface Chat {
  image: string,
  name: string,
  info?: {
    img: string,
    created: string,
    description: string,
    other: string
  }
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
