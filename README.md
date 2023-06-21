# Styled Image Slider

Styled Image Slider is a simple js/ts react component.
Developed with `typescript` and styled with `styled-components`.

---

## Parameters

It takes 2 parameters / props:

```ts
interface SliderProps {
  images: string[];
  timerOptions?: number;
}
```

#### <strong>`images`</strong>

An array of string `url` values that point to each image. In react you normally want to import the images to maintain the relative url after building. Then, just pass them in an array.

#### <strong>`timerOptions`</strong>

The time (in milliseconds) for each interval between slides. It always slides forwards, looping back to the start after it reaches the end.

After user interaction (meaning manually selecting a slide or sliding forwards or backwards), the timer is reset.

If left out, default timer is `6500ms` or `6.5 seconds`

## Placement

The Slider component has to be placed inside a parent component that will give it shape. There is no other way to adjust height or width of the slider.

---

## Usage

```jsx
import Slider from 'styled-img-slider'
import firstPic from 'url/firstImg.jpg'
import secondPic from 'url/secondImg.jpg'

[...]

<div className='slider-parent' >

  <Slider images={[firstPic, secondPic]} timerOptions={5000} />

</div>

[...]

```

---

<img src='./styled-react-slider.gif'>
