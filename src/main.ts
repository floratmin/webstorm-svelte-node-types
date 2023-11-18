import './app.css'
import App from './App.svelte'
import fs from 'fs';

const app = new App({
  target: <HTMLElement>document.getElementById('app'),
})

export default app
