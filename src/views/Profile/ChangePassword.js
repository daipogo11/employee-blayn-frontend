import React, {Component} from 'react';
import {
Nav, NavItem, NavLink, TabContent, TabPane, Form, Row, Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import classnames from 'classnames';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Đổi mật khẩu</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <h5 className="text-blayn">Đổi mật khẩu</h5>
            <div>Nhập mật khẩu cũ, và mật khẩu mới để đổi mật khẩu</div>       
            <Form className=" col-xs-12 col-sm-12 col-md-6  bg-light">
            <br/>
              <Row>
                <Col xs="12">
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Mật khẩu cũ</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="password" id="password" placeholder="Mật khẩu cũ"/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Mật khẩu mới</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="password" id="password" placeholder="Mật khẩu mới"/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Nhập lại mật khẩu mới</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="password" id="re-password" placeholder="Nhập lại mật khẩu mới"/>
                    </Col>
                    </Row>
                  </FormGroup>  
                </Col>
              </Row>
              <div className="form-actions">
              <Row>
                <Col xs="12">
                  <Button type="submit" color="primary">Save changes</Button>
                  <Button color="secondary">Cancel</Button>
                </Col>
              </Row>
              </div>
              <br/>
            </Form>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}