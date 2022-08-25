import React, { useEffect, useState } from 'react';

const UpComing = () => {
    const [value, setValue] = useState(20)
    const [min, setMin] = useState(2);
    const [hour, setHour] = useState(10);
    const [day, setDay] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((v) => (v <= 0 ? value : v - 1))
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    if (value === 0) {
        setMin(min - 1)
        setValue(60)
    }

    if (min === 0) {
        setHour(hour - 1)
        setMin(60)
    }

    if (hour === 0) {
        setDay(day - 1)
        setHour(24)
    }

    return (
        <div>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={{value: '15'}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span  style={{value: '10'}}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span  style={{value: '19'}}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span ></span>
    </span>
    sec
  </div>
</div>
        </div>
    );
};

export default UpComing;