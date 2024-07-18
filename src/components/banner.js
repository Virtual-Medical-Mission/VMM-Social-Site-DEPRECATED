export function Banner(props) {
  return (
    <figure className="relative h-96 w-3/4 bg-center">
      <img
        className="h-full w-full rounded-xl object-cover object-center border-color-dark border-4 dark:border-2"
        src={props.Banner}
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm dark:bg-primary-dark/75 dark:py-4 dark:px-6 dark:shadow-lg dark:shadow-black/5 dark:saturate-200 dark:backdrop-blur-sm">
        <div className="flex-col justify-center items-center font-thisFont w-full dark:text-font-dark">
          <h1 className="text-3xl font-semibold">{props.title}</h1>
          <h2 className="text-xl">{props.caption}</h2>
        </div>
      </figcaption>
    </figure>
  );
}
