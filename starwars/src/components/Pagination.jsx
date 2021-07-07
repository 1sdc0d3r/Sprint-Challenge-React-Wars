import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./StarWars.css";

function Pagin(props) {
  // props = {
  //   next: urlNext,
  //   prev: urlPrev,
  //   getUrl: getUrl
  // };
  return (
    <Pagination aria-label="Page navigation example" className="pageChange">
      <PaginationItem className="prev">
        <PaginationLink previous onClick={() => props.getUrl(props.prev)} />
      </PaginationItem>
      <PaginationItem className="next">
        <PaginationLink next onClick={() => props.getUrl(props.next)} />
      </PaginationItem>
    </Pagination>
  );
}
export default Pagin;
