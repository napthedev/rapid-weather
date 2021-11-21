<button {...$$restProps} on:click>
  <slot />
</button>

<style>
  button {
    border-radius: 50px;
    background: #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #d4d4d4;
  }
</style>
