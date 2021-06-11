<div align="center">
<a href="https://github.com/AbdallahHemdan/Instahelp" rel="noopener">
  
![banner](https://user-images.githubusercontent.com/40190772/121611449-87404100-ca58-11eb-90a3-a9afd8690eaf.png)

</div>

<h3 align="center">INSTAHELP</h3>

<div align="center">

[![GitHub contributors](https://img.shields.io/github/contributors/AbdallahHemdan/Instahelp)](https://github.com/AbdallahHemdan/Instahelp/contributors)
[![GitHub issues](https://img.shields.io/github/issues/AbdallahHemdan/Instahelp)](https://github.com/AbdallahHemdan/Instahelp/issues)
[![GitHub forks](https://img.shields.io/github/forks/AbdallahHemdan/Instahelp)](https://github.com/AbdallahHemdan/Instahelp/network)
[![GitHub stars](https://img.shields.io/github/stars/AbdallahHemdan/Instahelp)](https://github.com/AbdallahHemdan/Instahelp/stargazers)
[![GitHub license](https://img.shields.io/github/license/AbdallahHemdan/Instahelp)](https://github.com/AbdallahHemdan/Instahelp/blob/master/LICENSE)
<img src="https://img.shields.io/github/languages/count/abdallahHemdan/Instahelp" />
<img src="https://img.shields.io/github/languages/top/AbdallahHemdan/Instahelp" />
<img src="https://img.shields.io/github/languages/code-size/AbdallahHemdan/Instahelp" />
<img src="https://img.shields.io/github/issues-pr-raw/AbdallahHemdan/Instahelp" />

</div>

## Table of Contents

- [About the Project](#about-the-project)
  - [Build with](#build-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running](#running)
- [Responsive Screenshots](#responsive-screenshots)
- [Desktop Screenshots](#desktop-screenshots)
- [File Structure](#file-structure)
- [Contributors](#contributors)
- [License](#license)


## About The Project
> **Instahelp** is a Q&A portal website, it features questions and answers on a wide range of tags/topics The website serves as a platform for users to ask and answer questions,  and, through membership and active participation, to vote questions and answers up or down and edit questions and answers in a fashion similar to
[Quora](https://www.quora.com/)

### Build with
- [Vue JS](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Firebase](https://firebase.google.com/?gclid=CjwKCAjwjqT5BRAPEiwAJlBuBXqiYnG_P_iPMJ5MItS8029GlkjKYrJNblDVrp88ZizMxEiPmLc8yxoCnS0QAvD_BwE)
- [Bootstrap](https://getbootstrap.com/)
- [BEM Methodology](http://getbem.com/)
- [Convnetional Commits](https://hemdan.hashnode.dev/conventional-commits)

## Getting Started
> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.

### Installation

1. **_Clone the repository_**

```sh
$ git clone https://github.com/AbdallahHemdan/Instahelp.git
```
2. **_Navigate to repository directory_**
```sh
$ cd Instahelp
```

3. **_Install dependencies_**

```sh
$ yarn install
```

### Running

1. **_Running on development mode_**
```sh
$ yarn serve
```

### Responsive Screenshots

<div align="center">
  
![Responsive__4](https://user-images.githubusercontent.com/40190772/121612744-485fba80-ca5b-11eb-8981-6ef38f7ea890.png)

![Responsive__1](https://user-images.githubusercontent.com/40190772/121612746-4a297e00-ca5b-11eb-8c6e-535206adb7e8.png)

![Responsive__2](https://user-images.githubusercontent.com/40190772/121612747-4bf34180-ca5b-11eb-8cfd-cffbae29d92c.png)

![Responsive__3](https://user-images.githubusercontent.com/40190772/121612750-4c8bd800-ca5b-11eb-967c-1534ff240aaf.png)

</div>

### Desktop Screenshots

  
<div align="center">
  
![Static__1](https://user-images.githubusercontent.com/40190772/121613181-392d3c80-ca5c-11eb-8959-3c2a955ac52b.png)

![Static__2](https://user-images.githubusercontent.com/40190772/121613154-2f0b3e00-ca5c-11eb-864e-4cf9d58fd920.png)

![Static__3](https://user-images.githubusercontent.com/40190772/121613158-30d50180-ca5c-11eb-837d-db66672af021.png)

![Static__5](https://user-images.githubusercontent.com/40190772/121613161-32062e80-ca5c-11eb-88d6-c976f6af8f1d.png)

![Static__7](https://user-images.githubusercontent.com/40190772/121613167-33cff200-ca5c-11eb-9be1-2943e49c5158.png)

![Static__8](https://user-images.githubusercontent.com/40190772/121613169-34688880-ca5c-11eb-9760-9ed8b86dde70.png)

![Static__9](https://user-images.githubusercontent.com/40190772/121613173-36324c00-ca5c-11eb-8c5a-6be4caa3e85f.png)

![Static__10](https://user-images.githubusercontent.com/40190772/121613179-37fc0f80-ca5c-11eb-9dae-c8a555c8ab20.png)

</div>
  
## File Structure
                                    
    Instahelps
    ├── README.md
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    ├── vue.config.js
    ├── babel.config.js
    ├── .gitignore
    |
    ├── src
    │   ├── assets
    |   |   ├── GIF
    |   |   └── svgs
    |   |
    │   ├── components
    |   |   ├── Answers
    |   |   ├── AuthHeader	
    |   |   ├── FollowItem	
    |   |   ├── LeftAuth	
    |   |   ├── Navbar	
    |   |   ├── NewPost	
    |   |   ├── Newsfeed	
    |   |   ├── OrDivider	
    |   |   ├── Post	
    |   |   ├── PostAction	
    |   |   ├── PostDescription	
    |   |   ├── ProfileBottom	
    |   |   ├── ProfileDropdown	
    |   |   ├── ProfileHeader	
    |   |   ├── SingleAnswer	
    |   |   ├── SingleSuggestion	
    |   |   ├── SuggestionHeader	
    |   |   ├── UserInfo
    |   |   ├── UserSuggestionItem
    |   |   └── UserSuggestions
    |   |   
    │   ├── plugins
    |   |   └── firebase
    |   |
    │   ├── router
    |   |   └── index.js
    |   |
    │   ├── services
    |   |   ├── comment.service
    |   |   ├── question.service
    |   |   ├── suggestion.service
    |   |   ├── tag.service
    |   |   └── user.service
    |   |
    │   ├── styles
    |   |   ├── _fonts.scss
    |   |   ├── _global.scss
    |   |   └── _settings.scss
    |   |
    │   ├── utilities
    |   |   ├── auth
    |   |   ├── constants
    |   |   ├── firebase
    |   |   └── user
    |   |
    │   ├── views
    |   |   ├── About
    |   |   ├── ContactUs
    |   |   ├── ForgetPassword
    |   |   ├── Home
    |   |   ├── Login
    |   |   ├── NotFound
    |   |   ├── Profile
    |   |   ├── Question
    |   |   ├── Settings
    |   |   ├── Signup
    |   |   └── Tag
    |   |   
    │   └── App.vue
    │   └── main.js
    |   | 
    ├── public
    │   ├── favicon.png
    │   └── index.html	
    ├── .github
    ├── .vscode
    └── node_modules



## Contributors
> Thanks goes to these wonderful people in the frontend team.
<table>
  <tr>

<td align="center"><a href="https://github.com/AbdallahHemdan" target="_black"><img src="https://avatars1.githubusercontent.com/u/40190772?s=460&v=4" width="150px;" alt="abdallah hemdan"/><br /><sub><b>Abdallah Hemdan</b></sub></a><a href="https://github.com/AbdallahHemdan/oudFrontend/commits/master?author=AbdallahHemdan" title="Code">💻</a> <br /></td>

<td align="center"><a href="https://github.com/Abdelrhmanfdl"  target="_black"><img src="https://avatars.githubusercontent.com/u/44409979?v=4" width="150px;" alt="Abdelrahman Fadl"/><br /><sub><b>Abdelrahman Ahmed Fadl</b></sub></a><a href="https://github.com/AbdallahHemdan/oudFrontend/commits/master?author=Abdelrhmanfdl" title="Code">💻</a><br /></td>

<td align="center"><a href="https://github.com/AdelRizq" target="_black"><img src="https://avatars.githubusercontent.com/u/40351413?v=4" width="150px;" alt="Adel Rizq"/><br /><sub><b>Adel Mohamed Abdelhamed</b></sub></a><a href="https://github.com/AbdallahHemdan/oudFrontend/commits/master?author=AdelRizq" title="Code">💻</a><br /></td>


<td align="center"><a href="https://github.com/Mahboub99" target="_black"><img src="https://avatars3.githubusercontent.com/u/43186742?s=460&v=4" width="150px;" alt=""/><br /><sub><b>Ahmed Mahboub</b></sub></a><a href="https://github.com/AbdallahHemdan/oudFrontend/commits/master?author=Mahboub99" title="Code">💻</a><br /></td>
  </tr>
 </table>
 
## License

> This software is licensed under MIT License, See [License](https://github.com/AbdallahHemdan/Instahelp/blob/master/LICENSE) for more information ©AbdallahHemdan.
