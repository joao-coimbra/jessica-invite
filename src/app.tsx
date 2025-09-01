import inviteImage from './assets/invite.jpg'

export function App() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="relative flex aspect-[307/400] max-h-dvh items-center justify-center">
        <picture>
          <source srcSet={inviteImage} type="image/webp" />
          <img
            alt="Jessica Invite"
            className="size-full object-contain"
            height={400}
            src={inviteImage}
            width={307}
          />
        </picture>
        <a
          aria-label="Open location in Google Maps"
          className="absolute right-2/11 bottom-2/7 h-1/16 w-2/5"
          href="https://maps.app.goo.gl/HR2K5xZrfw4a46X69"
          rel="noopener"
          target="_blank"
        >
          <span className="sr-only">Open location in Google Maps</span>
        </a>
      </div>
      <a
        aria-label="Confirmar presença"
        className="shadow-lg hover:bg-rose-500 duration-300 fixed flex items-center justify-center bottom-6 h-12 w-56 cursor-pointer rounded-md bg-rose-400 text-white"
        href="https://wa.me/5514996707309?text=Confirmado!%20Estarei%20no%20evento.%0APode%20contar%20comigo!"
        rel="noopener"
        target="_blank"
      >
        <span className="sr-only">Confirmar presença</span>
        <span>Confirmar presença</span>
      </a>
    </main>
  )
}
