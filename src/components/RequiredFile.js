import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 import uploadIcon from '../assets/image/upload.png'
export default function CardWithLink() {
  return (
    <>
        <Card className="mt-6 w-96 border-2 shadow-2xl	">
          
        <CardBody className="flex flex-wrap justify-center">
            <img src = {uploadIcon} className="w-48"/>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Vui lòng chọn tệp tin muốn in
            </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center">
            <Link to='/TaiTaiLieu'>
              
              <Button size="sm" variant="text" className="flex items-center gap-2">
                <span class="absolute flex h-1 w-1" style={{left:'38%'}}>
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-600 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-1 w-1 bg-red-600"></span>
              </span>
                  Tải ngay
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                  </svg>
              </Button>
            </Link>
        </CardFooter>
        </Card>
    </>
  );
}