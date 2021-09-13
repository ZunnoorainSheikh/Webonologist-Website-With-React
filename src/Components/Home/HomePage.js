import React from "react";
import Header from "./Header";
import Mainbody from "./Mainbody";
import Mainbodyr from "./Mainbodyr";
import ContactUs from "../ContactUs";
import Footer from "../Footerus/Footer";

function HomePage() {
  return (
    <>
      <Header
        title="Full of Tech Senses"
        titledesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dignissimos!"
      />
      <Mainbody
        heading="IT Services"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure atque porro qui, laborum sapiente dolorem quia odit, quam temporibus, exercitationem perferendis aperiam. Aliquam repellat possimus nisi ipsa architecto accusamus consequatur iure eligendi. Quo corporis quia rem, exercitationem animi laudantium perspiciatis maxime obcaecati perferendis dolorum quas porro rerum deleniti autem reiciendis, dolor beatae repellat cupiditate aperiam? Expedita tenetur temporibus corrupti praesentium maxime voluptatum alias in vitae aliquam. Veritatis dolor sed ad rerum qui nesciunt accusamus alias mollitia dignissimos, voluptatem error ab inventore magnam voluptas voluptate. Dolore ullam corporis quam reiciendis itaque nobis! Excepturi provident illum eligendi ratione dicta dignissimos eius quasi."
        imgsrc={`https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
      />

      <Mainbodyr
        heading="Software Engineering"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure atque porro qui, laborum sapiente dolorem quia odit, quam temporibus, exercitationem perferendis aperiam. Aliquam repellat possimus nisi ipsa architecto accusamus consequatur iure eligendi. Quo corporis quia rem, exercitationem animi laudantium perspiciatis maxime obcaecati perferendis dolorum quas porro rerum deleniti autem reiciendis, dolor beatae repellat cupiditate aperiam? Expedita tenetur temporibus corrupti praesentium maxime voluptatum alias in vitae aliquam. Veritatis dolor sed ad rerum qui nesciunt accusamus alias mollitia dignissimos, voluptatem error ab inventore magnam voluptas voluptate. Dolore ullam corporis quam reiciendis itaque nobis! Excepturi provident illum eligendi ratione dicta dignissimos eius quasi."
        imgsrc={`https://images.pexels.com/photos/3912478/pexels-photo-3912478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
      />

      <Mainbody
        heading="Cyber Security"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure atque porro qui, laborum sapiente dolorem quia odit, quam temporibus, exercitationem perferendis aperiam. Aliquam repellat possimus nisi ipsa architecto accusamus consequatur iure eligendi. Quo corporis quia rem, exercitationem animi laudantium perspiciatis maxime obcaecati perferendis dolorum quas porro rerum deleniti autem reiciendis, dolor beatae repellat cupiditate aperiam? Expedita tenetur temporibus corrupti praesentium maxime voluptatum alias in vitae aliquam. Veritatis dolor sed ad rerum qui nesciunt accusamus alias mollitia dignissimos, voluptatem error ab inventore magnam voluptas voluptate. Dolore ullam corporis quam reiciendis itaque nobis! Excepturi provident illum eligendi ratione dicta dignissimos eius quasi."
        imgsrc={`https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
      />

      <Mainbodyr
        heading="Game Development"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure atque porro qui, laborum sapiente dolorem quia odit, quam temporibus, exercitationem perferendis aperiam. Aliquam repellat possimus nisi ipsa architecto accusamus consequatur iure eligendi. Quo corporis quia rem, exercitationem animi laudantium perspiciatis maxime obcaecati perferendis dolorum quas porro rerum deleniti autem reiciendis, dolor beatae repellat cupiditate aperiam? Expedita tenetur temporibus corrupti praesentium maxime voluptatum alias in vitae aliquam. Veritatis dolor sed ad rerum qui nesciunt accusamus alias mollitia dignissimos, voluptatem error ab inventore magnam voluptas voluptate. Dolore ullam corporis quam reiciendis itaque nobis! Excepturi provident illum eligendi ratione dicta dignissimos eius quasi."
        imgsrc={`https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
      />

      <hr className="container"></hr>
      <ContactUs />
      <Footer />
    </>
  );
}

export default HomePage;
