import logo from '../ig.png';

function Home() {

  return (
    <>
      <div className="container max-w-screen-2xl max-h-full p-5  absolute left-0 right-0">
        <article className="font-callingstone">
          <p>Creativity Without Limit, Never Stop Troubleshooting</p>
        </article>
        <div className="absolute right-20 p-15 max-w-screen-2xl">
          <h2 className="font-callingstone">Check Our Portfolio here!</h2>
          <a href="#" className="font-callingstone">
            Photography Portofolio
          </a>
          <br></br>
          <a href="#" className="font-callingstone">
            Video Portofolio
          </a>
          <br></br>
          <a href="#" className="font-callingstone">
            Website and Application
          </a>
          <br></br>
        </div>
      </div>
      <body>
      <div className="flex flex-col justify-center items-center pl-10 pt-10">
        <article classname="font-timesnow">
        <p className="font-timesnow">You can contact me on my instagram or twitter! </p>
        </article>
         <a href="https://instagram.com/fizilalilhuda_"><img src={logo} alt="Gambar" width="32" height="32"></img></a> 
      </div>
      </body>
    </>
  );
}

export default Home;
