import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import GoogleOneTap from '@/components/google-one-tap'

export default function IndexPage() {
  const id = nanoid()

  return (
    <>
      <Chat id={id} />
      <GoogleOneTap />
    </>
  )
}
