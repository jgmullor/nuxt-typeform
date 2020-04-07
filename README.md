# nuxt-typeform
A NuxtJS wrapper for [Typeform Embed SDK](https://developer.typeform.com/embed/).

## Installation

```bash
$ npm install --save nuxt-typeform # or yarn add
```

## Setup
- Install with 
```
npm install --save nuxt-typeform
// or
yarn add nuxt-typeform
```
- Add `nuxt-typeform` to `modules` section of `nuxt.config.js`
```js
modules: [
    'nuxt-typeform',
]
```

## Usage
```js
<Typeform
    url="https://test.typeform.com/to/test"
    :hide-headers="true"
    :hide-footer="true"
    :button-text="Send"
    :opacity="0"
    :on-submit="onSubmit"
/>
```

```js
export default {
    methods: {
        ...
        onSubmit () {
            console.log('Typeform successfully submitted')
        }
    }
}
```

## Component Options

#### `url` (required)
typeform's URL (like: https://admin.typeform.com/to/PlBzgL)

#### `hide-headers` (optional)
Hide typeform header, that appears when you have a Question group, or a long question that you need to scroll through to answer, like a Multiple Choice block.

#### `hide-footer` (optional)
Hide typeform footer, that appears showing the progress bar and the navigation buttons.

#### `opacity` (optional)
You can make your typeform's background totally transparent, or opaque. (For example, to have a video as a background)

#### `button-text` (optional)
The button text that appears on mobile in order to open the typeform.

#### `on-submit` (optional)
**PRO+ accounts only** Callback function that will be executed right after the typeform is successfully submitted.	

## Development

```bash
$ git clone https://github.com/jgmullor/nuxt-typeform.git
$ cd nuxt-typeform
$ npm
```

## License
Code released under the [MIT license](LICENSE.txt).