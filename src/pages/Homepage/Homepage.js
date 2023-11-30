import { Carousel, Typography } from "@material-tailwind/react";
 
export default function Homepage() {
  return (
      <>
        <Carousel
            style={{height:'669px'}}

        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
                <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
                />
            ))}
            </div>
        )}
        >
        <img
            src="https://st.ielts-fighter.com/src/ielts-fighter-image/2023/01/13/a0872921-81f3-4a29-9070-aac0984e88a6.jpeg"
            alt="image 1"
            className="h-full w-full object-cover"
        />
        <img
            src="https://dean1665.vn/uploads/school/bach-khoa-tp-hcm1jpg.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
        />

        </Carousel>
        <div
            style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            }}
        >
            <Typography variant="h3" style={{color: '#2196F3', textShadow:'0 0 5px #000'}} className="uppercase mt-3 opacity-75 drop-shadow-2xl">
            Trường Đại học Bách Khoa - ĐHQG TP.HCM
            </Typography>
            <Typography variant="h1" style={{color: '#2196F3', textShadow:'0 0 5px #000'}} className="uppercase mt-4 opacity-75 drop-shadow-2xl">
            Smart Printing serVice
            </Typography>
        </div>
      </>
  );
}