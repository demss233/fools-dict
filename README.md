# fools-dict

A simple CLI tool to manage a personal word list, either locally in a text file (`db.txt`) or using MongoDB.  
Add words, remove them, or view everything. Useful for writers, language learners, or just storing weird vocabulary you come across.

## Features

- `add <word>` – Adds the word to `db.txt`
- `remove <word>` – Removes the word from `db.txt`
- `view` – Shows all stored words

## Installation

```bash
git clone https://github.com/demss233/fools-dict.git
cd fools-dict
npm install
npm install -g .
```

## Usage
```bash
words add nostalgia  
words remove chaos  
words view
```
