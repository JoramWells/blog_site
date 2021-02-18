import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";


class Scroll extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
  };

  render() {
    return (
      <Container>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div>
            <Container>
            {this.state.items.map((i, index) => (
              <Row key={index}>
                
                  <Col md={6} >
                    <Card style={{  margin: "25px", backgroundColor:"#001a33", color:"white" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                
              </Row>
              ))}
            </Container>
          </div>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default Scroll;
