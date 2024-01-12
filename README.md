# p14-react-modal-derrahi

[![NPM](https://img.shields.io/npm/v/p14-react-modal-derrahi.svg)](https://www.npmjs.com/package/p14-react-modal-derrahi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <img src="https://github.com/Halima-DERRAHI/p14-react-modal-derrahi/blob/main/exemple.png" alt="Modal Screenshot" />
</p>

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
  buttonColor="color"
/>

```

## Behavior

- Handles key events (Escape, Enter) for modal interaction.

### Usage

```jsx
import React, { useState } from 'react';
import Modal from 'p14-react-modal-derrahi';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => { setIsOpen(true) };
  const closeModal = () => { setIsOpen(false) };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal
          icon="url_for_your_icon"
          message="Your message here"
          buttonText="Button text"
          onClose={closeModal}
          onButtonClick={() => {
            console.log('Button action');
            closeModal();
          }}
          className="your_css_class"
          buttonColor="color"
        />
      )}
    </div>
  );
}

export default Example;


```
## Peer Dependencies
The p14-react-modal-derrahi component has the following peer dependencies:

```bash
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

## License

MIT © [Halima-DERRAHI](https://github.com/Halima-DERRAHI)
