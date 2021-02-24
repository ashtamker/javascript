let stopWatch = function(elem, options) {

    let timer       = createTimer(),
        startButton = createButton(" start ", start),
        stopButton  = createButton(" stop ", stop),
        resetButton = createButton(" reset ", reset),
        offset,
        clock,
        interval;
  
    
    options = options || {};
    options.delay = options.delay || 1;
  
        
    elem.appendChild(timer);
    elem.appendChild(startButton);
    elem.appendChild(stopButton);
    elem.appendChild(resetButton);
    startButton.style.textDecoration = 'none';
    startButton.style.border = '3px solid #0CFF2B';
    startButton.style.color = '#0CFF2B';
    stopButton.style.textDecoration = 'none';
    stopButton.style.border = '3px solid #0CFF2B';
    stopButton.style.color = '#0CFF2B';
    stopButton.style.margin = '0px 5px ' ;
    resetButton.style.textDecoration = 'none';
    resetButton.style.border = '3px solid #0CFF2B';
    resetButton.style.color = '#0CFF2B';
    
    
    reset();
  
    
    function createTimer() {
      return document.createElement("span");
    }
  
    function createButton(action, handler) {
      var a = document.createElement("a");
      a.href = "#" + action;
      a.innerHTML = action;
      a.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return a;
    }
  
    function start() {
      if (!interval) {
        offset   = Date.now();
        interval = setInterval(update, options.delay);
      }
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  
    function reset() {
      clock = 0;
      render();
    }
  
    function update() {
      clock += delta();
      render();
    }
  
    function render() {
      timer.innerHTML = clock/1000; 
    }
  
    function delta() {
      var now = Date.now(),
          d   = now - offset;
  
      offset = now;
      return d;
    }
  
    
    this.start  = start ;
    this.stop   =  stop;
    this.reset  = reset;
  };

  const elems = document.getElementsByClassName("stop-watch");

for (var i=0, len=elems.length; i<len; i++) {
  new stopWatch(elems[i]);
}