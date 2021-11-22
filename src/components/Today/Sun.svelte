<script lang="ts">
  export let sunrise;
  export let sunset;

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);

    const hours24 = date.getHours();

    const hours = hours24 > 12 ? hours24 % 12 : hours24;
    const amOrPm = hours24 > 12 ? "PM" : "AM";

    const minutes = date.getMinutes();

    return `${hours}:${minutes} ${amOrPm}`;
  };

  const calculateDifference = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();

    const hourDiff = Math.abs(now.getHours() - date.getHours());
    const minDiff = Math.abs(now.getMinutes() - date.getMinutes());

    return `${
      date.getTime() - now.getTime() >= 0 ? "+" : "-"
    }${hourDiff}h ${minDiff}m`;
  };
</script>

<div class="container">
  <p>Sunrise and Sunset</p>
  <div class="info">
    <img src="/today/sunrise.png" alt="" />
    <div class="time">
      <p>{formatDate(sunrise)}</p>
      <p class="distance">{calculateDifference(sunrise)}</p>
    </div>
  </div>
  <div class="info">
    <img src="/today/sunset.png" alt="" />
    <div class="time">
      <p>{formatDate(sunset)}</p>
      <p class="distance">{calculateDifference(sunset)}</p>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .info {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
  }

  .distance {
    color: #808080;
    font-size: 13px;
  }
</style>
