# p14-react-modal-derrahi

[![NPM](https://img.shields.io/npm/v/p14-hrnet-react-modal.svg)](https://www.npmjs.com/package/p14-react-modal-derrahi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save p14-react-modal-derrahi
```

## Modal Component
## Description
A reusable modal component that displays a message with options for user actions.

## Properties

| Prop              | Type        | Description                                 |
|-------------------|-------------|---------------------------------------------|
| `icon`            | String      | URL for the icon displayed in the modal     |
| `message`         | String      | Message displayed in the modal              |
| `buttonText`      | String      | Text for the action button                  |
| `onClose`         | Function    | Callback to close the modal                 |
| `onButtonClick`   | Function    | Callback for the button action              |
| `className`       | String      | CSS class to customize the modal            |

## Examples

```jsx
<Modal
  icon="url_for_your_icon"
  message="Your message here"
  buttonText="Button text"
  onClose={() => console.log('Modal closed')}
  onButtonClick={() => console.log('Button action')}
  className="your_css_class"
/>

```

## Behavior

- Handles key events (Escape, Enter) for modal interaction.

### Usage

```jsx
import React, { Component } from 'react'
import Modal from 'p14-react-modal-derrahi'

class Example extends Component {
  render() {
    return (
      <Modal
        icon="url_for_your_icon"
        message="Your message here"
        buttonText="Button text"
        onClose={() => console.log('Modal closed')}
        onButtonClick={() => console.log('Button action')}
        className="your_css_class"
      />
    )
  }
}

```

## License

MIT © [Halima-DERRAHI](https://github.com/Halima-DERRAHI)