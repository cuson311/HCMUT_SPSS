import {
  Carousel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
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
        <img
            src="https://keystoneacademic-res.cloudinary.com/image/upload/element/19/199025_HCMUT1.png"
            alt="image 2"
            className="h-full w-full object-cover"
        />

        </Carousel>
        <div
            style={{
            position: "absolute",
            top: "70%",
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
                            <h3 className="text-2xl font-bold tracki sm:text-3xl dark:dark:text-gray-50">Student Smart Printing Service - Trải nghiệm in ấn thông minh cho sinh viên</h3>
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
                                        <h4 className="text-lg font-medium leadi dark:dark:text-gray-50">Chất Lượng Đảm Bảo</h4>
                                        <p className="mt-2 dark:dark:text-gray-400">Mọi lần in đều được đảm bảo về chất lượng tại SSPS. Hệ thống kiểm soát chất lượng nghiêm ngặt giúp đảm bảo mọi tài liệu in của bạn đều rõ nét và chất lượng. Chúng tôi cam kết mang đến trải nghiệm in ấn tốt nhất cho cộng đồng sinh viên.
</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://www.kennesaw.edu/printing-services/images/print-services-banner.jpeg" className="mx-auto rounded-lg shadow-lg dark:dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
        </section>
        <div className="flex mb-10 mx-auto px-5" style={{justifyContent:'space-between'}}>
            <Card
                shadow={false}
                className="relative max-w-[36rem] w-full m-4 items-end justify-center overflow-hidden text-center"
            >
                <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i1.adis.ws/i/canon/canon-get-inspired-smart-printing-1-1920x1080-tint_1?qlt=80&w=1920&sm=aspect&aspect=16:9&scaleFit=poi&poi=0.5021430206298828,0.3176380750868056,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
            <div className="mb-4">
                <h3 className="text-lg font-medium leadi text-white mb-3">Sản phẩm Độc Quyền</h3>
                <p className="mt-2 text-white">Khám phá các dịch vụ in ấn độc đáo chỉ có tại Student Smart Printing Service (SSPS). Tận hưởng trải nghiệm in ấn chất lượng cao với những tiện ích độc quyền dành riêng cho sinh viên, từ các tùy chọn in đa dạng đến những ưu đãi đặc biệt.</p>
            </div>
            <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://i1.adis.ws/i/canon/canon-get-inspired-smart-printing-1-1920x1080-tint_1?qlt=80&w=1920&sm=aspect&aspect=16:9&scaleFit=poi&poi=0.5021430206298828,0.3176380750868056,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)"
        />
      </CardBody>
      
            </Card>
            
            <Card
                shadow={false}
                className="relative max-w-[36rem] w-full m-4 items-end justify-center overflow-hidden text-center"
            >
                <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://ctrl-print.co.uk/wp-content/uploads/2020/07/Printer-with-tray-open-scaled.jpeg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
            <div className="mb-4">
                <h3 className="text-lg font-medium leadi text-white mb-3">Ưu Đãi Đặc Biệt</h3>
                <p className="mt-2 text-white">Hãy gia nhập cộng đồng SSPS ngay hôm nay để đặc quyền nhận các ưu đãi đặc biệt. Với chương trình thành viên, bạn sẽ được hưởng những ưu đãi độc quyền và giảm giá đặc biệt mỗi khi sử dụng dịch vụ in của chúng tôi. Đừng quên đăng ký nhận bản tin để luôn cập nhật thông tin về các chương trình khuyến mãi mới.</p>
            </div>
            <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://ctrl-print.co.uk/wp-content/uploads/2020/07/Printer-with-tray-open-scaled.jpeg"
        />
      </CardBody>
      
            </Card>

        </div>

        <Footer/>
      </>
  );
}