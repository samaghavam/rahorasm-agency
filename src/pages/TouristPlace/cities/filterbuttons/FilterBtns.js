import "../../../AsiaTour/test/filters/ordering/Ordering.css";
import { Button} from "react-bootstrap";

function FilterBtns() {


  return (
    <>
      <div className="carousel-row mx-auto ">
        <div className="button-container d-flex justify-content-center pt-2">
          <div className="button-scroll">
            <Button className="mx-1 fs-orders btn-custome border">همه</Button>
            <Button className="mx-1 fs-orders btn-custome border">
              امکان تفریحی
            </Button>
            <Button className="mx-1 fs-orders btn-custome border">
              مراکز خرید
            </Button>
            <Button className="mx-1 fs-orders btn-custome border">
              اماکن تاریخی
            </Button>
            <Button className="mx-1 fs-orders btn-custome border">
              موزه ها
            </Button>
          </div>
        </div>
      </div>


    </>
  );
}
export default FilterBtns;
