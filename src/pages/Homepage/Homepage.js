import { Carousel, Typography } from "@material-tailwind/react";
 import Header from "../../components/Header/Header";
 import Footer from "../../components/Footer/Footer";
export default function Homepage(props) {
  return (
      <>
      <Header value={props}/>
        <Carousel
            style={{height:'669px'}}
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        transition = {{ type: "tween", duration: 1.5} }
        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
                <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-['']  ${
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
        <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracki sm:text-3xl dark:dark:text-gray-50">Phone Store - Nơi công nghệ gặp gỡ đẳng cấp </h3>
                            <p className="mt-3 text-lg dark:dark:text-gray-400"> </p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:dark:text-gray-50">Sản phẩm Độc Quyền</h4>
                                        <p className="mt-2 dark:dark:text-gray-400">Khám phá các phiên bản iPhone đặc biệt chỉ có tại Phone Store. Từ những chiếc iPhone màu sắc giới hạn đến những phiên bản cộng tác độc đáo với các thương hiệu nổi tiếng. Hãy là người đầu tiên sở hữu những sản phẩm độc đáo này.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:dark:text-gray-50">Chất Lượng Đảm Bảo</h4>
                                        <p className="mt-2 dark:dark:text-gray-400">Mỗi iPhone bán ra từ Phone Store đều trải qua quy trình kiểm định nghiêm ngặt để đảm bảo rằng bạn nhận được sản phẩm hoàn hảo nhất. Ngoài ra, chúng tôi còn cung cấp chính sách đổi trả linh hoạt để bạn luôn hài lòng với quyết định của mình.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:dark:text-gray-50">Ưu Đãi Đặc Biệt</h4>
                                        <p className="mt-2 dark:dark:text-gray-400">Tham gia chương trình thành viên của Phone Store để nhận được các ưu đãi độc quyền và tiết kiệm chi phí cho mỗi lần mua sắm. Đăng ký bản tin của chúng tôi để không bỏ lỡ bất kỳ chương trình khuyến mãi nào.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://source.unsplash.com/random/360x480" alt className="mx-auto rounded-lg shadow-lg dark:dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
        </section>
        <Footer/>
      </>
  );
}