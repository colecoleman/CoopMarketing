<template>
  <div class="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/privacy">Privacy</router-link> |
        <router-link to="/terms-of-service">Terms</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Coop - Local Goods for Local Good</p>
    </footer>
  </div>
</template>

<style>
/* Import the Plus Jakarta Sans font */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
  --light-color: #C7E0C9;
  --medium-color: #5A865B;
  --dark-color: #1E4A2A;
}

.app {
  font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--light-color);
  width: 100vw;
  max-width: 1200px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--dark-color);
}

body,
html {
  margin: 0;
}

header {
  padding: 15px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--light-color);
  z-index: 100;
  position: fixed;

  border-bottom: 1px solid var(--dark-color);
}

nav a {
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
  color: var(--dark-color);
}

nav a.router-link-exact-active {
  color: var(--medium-color);

}


footer {
  padding: 20px 0;
  border-top: 1px solid #eee;

  width: 100%;
  z-index: 100;

  background-color: var(--light-color);
}
</style>