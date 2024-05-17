import { Breadcrumbs, Link, Typography } from "@mui/material";

function HomePage() {
  return (
    <div className=" w-full h-[400px] bg-[url('/bg.png')] bg-cover bg-center flex flex-col gap-7 items-center justify-center mb-28">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/shop">
          Shop
        </Link>
      </Breadcrumbs>

      <Typography variant="h1" component="h1">
        Shop Page
      </Typography>
      <Typography variant="h6" component="h5">
        Let’s design the place you always imagined.
      </Typography>
    </div>
  );
}

export default HomePage;
