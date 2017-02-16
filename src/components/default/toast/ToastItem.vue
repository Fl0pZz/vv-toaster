<template src="./toast.html" />

<script src="./toast.js"></script>

<style lang="css">
  .toast {
    width: 300px;
    height: 100px;
    border-radius: 2px;
    border: 1px solid black;
    margin: 5px 0;
    padding: 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .toast .main {
    flex-grow: 1;
  }

  .toast h6 {
    margin: 0;
    padding: 5px;
  }

  .toast .action {
  }
</style>
