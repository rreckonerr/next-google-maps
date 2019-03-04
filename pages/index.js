import React, { Component } from "react";
import SideBar from "../components/SideBar";
import GoogleMap from "../components/GoogleMap";
import Layout from "../layouts/Main";
import styled from "styled-components";

const SideBarWrapper = styled.aside`
  grid-area: sidebar;
`;

const GoogleMapsWrapper = styled.div`
  grid-area: main;
`;

class IndexPage extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <Layout>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
        <GoogleMapsWrapper>
          <GoogleMap />
        </GoogleMapsWrapper>
      </Layout>
    );
  }
}

export default IndexPage;
