![npm](https://img.shields.io/npm/v/clonify?cacheSeconds=10)
![License](https://img.shields.io/github/license/Ritik97/clonify)


# Clonify

> A lightweight and reliable deep cloning utility for JavaScript and TypeScript.

**Clonify** is a zero-dependency deep cloning function that handles objects, arrays, maps, sets, dates, regex, symbols, and custom class instances. It also supports circular references.

---

## ✨ Features

- 🔁 Deep clones complex nested structures  
- 🔒 Handles circular references safely  
- 🧠 Clones Maps, Sets, Dates, Regex, Symbols  
- 💎 Preserves prototypes of custom class instances  
- 🧾 Full TypeScript support  

---

## 📦 Installation

```bash
npm install clonify
```

---

## 🚀 Usage

```ts
import { clonify } from 'clonify'

class User {
  constructor(public name: string) {}
}

const original = {
  user: new User("Ritik"),
  numbers: [1, 2, 3],
  meta: new Map([["key", "value"]]),
}

original.self = original // circular reference

const copy = clonify(original)

console.log(copy)
```

---

## 📚 API

### `clonify(value: any): any`
Performs a deep clone of the provided value, supporting all standard JavaScript data structures.

---

## 🧪 Supported Types

- Objects (POJOs and class instances)

- Arrays

- Maps

- Sets

- Dates

- RegExps

- Symbols (as keys and values)

- Circular references

---

## 📘 License

MIT © [Ritik](https://github.com/Ritik97)