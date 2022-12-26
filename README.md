# Stripe WebGl Gradient Animation

All Credits to Stripe.com

## Usage

### JS

```js
  const gradient = new Gradient()
  gradient.initGradient('#gradient-canvas')
```

### HTML

```html
  <canvas id="gradient-canvas" data-transition-in />
```

### Styles

```css
#gradient-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 14px 14px 0px 0px;
  --gradient-color-1: #b90e50;
  --gradient-color-2: #032e46;
  --gradient-color-3: #151525;
  --gradient-color-4: #0f3b5e;
}
```

## Local Dev

```sh
yarn install
yarn dev
```
