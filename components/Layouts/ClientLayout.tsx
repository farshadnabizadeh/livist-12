import React, { ReactElement } from "react";
import Header from "../Header/Header";
import WhatsAppIcon from "@/assets/images/icons/whatsapp-logo.svg";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";

const ClientLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

ClientLayout.displayName = "ClientLayout";

export default ClientLayout;
