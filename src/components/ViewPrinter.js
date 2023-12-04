import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewPrinter(prop) {
  const [open, setOpen] = React.useState(false);
  const data = prop.value;
  console.log(data)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='mt-3 flex justify-center'> 
        <Button variant="outlined" onClick={handleClickOpen}>
          Xem thông tin chi tiết
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <Card sx={{ width: 500, padding: '20px'}}>
            <CardMedia
              className='border-solid border-2 shadow-md	'
              sx={{ height: 300}}
              image={data['img_source']}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data['brand_name']} {data['model_name']} 
              </Typography>
              <Typography variant="body1" color="text" component="div" className='flex' >
                Tên hãng: 
                <Typography variant="body1" color="text.secondary" className='ps-2'>
                  {data['brand_name']}
                </Typography>
              </Typography>
              <Typography variant="body1" color="text" component="div" className='flex' >
                Tên mẫu:
                <Typography variant="body1" color="text.secondary" className='ps-2'>
                  {data['model_name']}
                </Typography>
              </Typography>
              <Typography variant="body1" color="text" component="div" className='flex' >
                Mã máy in:
                <Typography variant="body1" color="text.secondary" className='ps-2'>
                  {data['id_printer']}
                </Typography>
              </Typography>
              <Typography variant="body1" color="text" component="div" className='flex' >
                Cơ sở:
                <Typography variant="body1" color="text.secondary" className='ps-2'>
                  {data['campus_name']}
                </Typography>
              </Typography>
              <Typography variant="body1" color="text" component="div" className='flex' >
                Tòa:
                <Typography variant="body1" color="text.secondary" className='ps-2'>
                  {data['building_name']}
                </Typography>
              </Typography>
            </CardContent>
            <CardActions className='flex justify-center'>
              <Button size="small">Đóng</Button>
            </CardActions>
          </Card>
        </Dialog>
      </div>

      
    </React.Fragment>
  );
}
