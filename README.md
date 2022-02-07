### How to create your Dapp and deploy it to Vercel

#### Things you learn

<details>
<summary>Tabel of content Content</summary>

  - Setting up your Github and creating your project
  - Setting up Next.JS 
  - How to Write and Deploy your Smart contracts using Remix ID to the Testnets
  - How to connect your Smart contract with Next.JS using ethers.js
  - How to deploy your Dapp to Vercel
</details>

> So much to learn let's get started

#### Next.JS  Setup 
> Require
[Node.js 12.22.0](https://nodejs.org/) or later

> install yarn "do it now and thank me later"
`npm install -g yarn`

#### create Next.JS 
`yarn create next-app YOUR_APP_NAME`

at this point, you have up and running the Next.Js app

<hr>

#### Github Setup

> his is how you create a new repository
pictures

![image1](images/1.png)




Run these commands to upload your code to GitHub

![image2](images/2.png)


> git init 

> git add .

> git commit -m "Initial commit" 

>git branch -M main

> git remote add origin 
Your_GIT_REPO_LINK

> git push -u origin main

After pushing your code looks like this

![image3](images/3.png)


<hr>

#### Vercel deploy

create an account with your GitHub

create a new project

![image4](images/4.png)

select your newly create a repository

![image5](images/5.png)

then deploy

![image6](images/6.png)


At this point hope your Next.JS app is up and running


<hr>


#### deploy Smart contract to Rinkeby using remix IDE

open Remix ID

https://remix.ethereum.org/


##### go to Storage.sol file and compile it by going to SOLIDITY COMPILER

![image7](images/7.png)


##### open your MM and select Rinkeby

![image8](images/8.png)

##### Go to DEPLOY & RUN TRANSACTIONS select injected web3 under ENVIRONMENT

![image9](images/9.png)

<hr>

#### How to connect your Smart Contract using ethers.JS and call it from Next.JS

> Now install the ethers package, remember to install it within same folder as your Next.JS app:


`yarn add ethers`


![image10](images/10.png)


#### Now Copy the index.js from my Github

here is the source code 

![dapp](images/dapp.png)


**Replace my contract address and ABI with yours** 


![image11](images/11.png)

![image12](images/12.png)

