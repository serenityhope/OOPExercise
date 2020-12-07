


const elf = {
    title: `Elf`,
    main: `Buddy`,
   
    quote: function () {
      return `The best way to spread Christmas cheer is singing loud for all to hear`;
    },
  
    info: function () {
      return `${this.title} is about ${this.main}`;
      // Or
      // return this.title + ' is about ' + this.main;
    }
  };
  console.log(elf);
  
  
  const muppetXmas = {
    title: `The Muppet Christmas Carol`,
    main: `Ebenezer Scrooge`,
    
    quote: function () {
      return `Wherever you find love it feels like Christmas`;
    },
   
    info: function () {
      return `${this.title} is about ${this.main}`;
    }
  }
  console.log(muppetXmas);
  
 
  function XmasMovie(title, main) {
    this.title = title;
    this.main = main;
  }
  
 
  XmasMovie.prototype.info = function () {
    return `${this.title} is about ${this.main}`;
  }
  

  const elf1 = new XmasMovie(`Elf`, `Buddy`);
  console.log(elf1);
  console.log(elf1.info());
  
 
  const muppetXmas1 = new XmasMovie(
    `The Muppet Christmas Carol`,
    `Ebenezer Scrooge`
  );
  console.log(muppetXmas1);
  console.log(muppetXmas1.info());
  
  
  class CM {
    constructor(title, main) {
      this.title = title;
      this.main = main;
    }
   
    info() {
      return `${this.title} is about ${this.main}`;
    }
    
    static loveXmas() {
      return `I Love Christmas!`;
    }
  }
  
  
  const elf2 = new CM(`Elf`, `Buddy`);
  console.log(elf2);
  console.log(elf2.info());
  
 
  const muppetXmas2 = new CM(
    `The Muppet Christmas Carol`,
    `Ebenezer Scrooge`
  );
  console.log(muppetXmas2);
  console.log(muppetXmas2.info());
  
  
  console.log(CM.loveXmas());
  
 
  class CMCast extends CM {
   
    constructor(title, main, cast) {
      
      super(title, main);
      this.cast = cast;
    }
   
    static create(title, main, cast) {
      return new CMCast(title, main, cast);
    }
  }
  
 
  const elf3 = new CMCast(
    `Elf`,
    `Buddy`,
    {
      buddy: `Will Ferrell`,
      walter: `James Caan`,
      jovie: `Zooey Deschanel`,
      papaElf: `Bob Newhart`
    }
  );
  console.log(elf3);
  console.log(elf3.info());
  console.log(CMCast.loveXmas());
  
  
  const muppetXmas3 = new CMCast(
    `The Muppet Christmas Carol`,
    `Ebenezer Scrooge`,
    {
      scrooge: `Michael Caine`,
      charlesDickens: `The Great Gonzo`,
      bobCrachit: `Kermit The Frog`
    }
  );
  console.log(muppetXmas3);
  console.log(muppetXmas3.info());
  // console.log(CMCast.loveXmas());
  
 
  const homeAlone = CMCast.create(
    `Home Alone`,
    `Kevin McCallister`,
    {
      kevin: `Macaulay Culkin`,
      harry: `Joe Pesci`,
      marv: `Daniel Stern`
    }
  );
  
  
  console.log(homeAlone);
  console.log(homeAlone.info());

  
  
  