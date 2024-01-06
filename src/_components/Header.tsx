export default ({ ...props }) => (
  <>

    <header class="sticky top-0 backdrop-blur bg-primary/50 dark:bg-primary-dark/75">
      <div class="container overflow-auto mx-auto px-4">
        <nav class="flex w-full justify-between">
          <a class="flex items-center" href="/">
            <img
              src="/logo/cookbook-high-resolution-logo-black-transparent.svg"
              alt="logo"
              class="m-3 h-12"
            />
          </a>
          <ul class="flex items-center">
            <props.comp.HeaderMenuItems {...props} />
          </ul>
        </nav>
      </div>
    </header>
  </>
);
