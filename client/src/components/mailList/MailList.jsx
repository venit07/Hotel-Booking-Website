import { useState } from "react";
import "./mailList.css";

const MailList = () => {
  const [formState, setFormState] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
    const config = {
      SecureToken: "0c3db559-f2d6-499d-bc9b-78839d38c9e6",
      To: "goodluck@yopmail.com",
      From: formState.email,
      Subject: "This is the subject",
      Body: formState.textarea,
    };
    if (window.Email) {
      window.Email.send(config).then(() => {
        alert("Email send successfully");
      });
    }
  };

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <div className="contactBox">
      <div className="lSide">
        <img
          className="addImg"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAUQMBEQACEQEDEQH/xAAcAAEAAgMAAwAAAAAAAAAAAAAABgcBBAUCAwj/xAA+EAABAwICBgYHBgUFAAAAAAABAAIDBAUGEQcSITFBURQiYXGBoRMjMkKRscEVJFJicoIWQ6Ky0VNjkuLw/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQMGAv/EADARAAIBAgQDBgYDAQEAAAAAAAABAgMEBRESMRMhQSIyUXHR8BRhgaGx4UKRwfEV/9oADAMBAAIRAxEAPwC8UAzQESxPjy22R76aAdNrG7DHG7JrD+Z3DuGZVja4bVr9p8o+9iNVuow5LmyurpjrEFxccqvokZ/l0o1f6va81dUcNtqf8c38yDK5qy65EfnqqmoOdTUzTHnLI53zKmxhCPdSX0NLbe7MQzzQHOCaWI843lp8lmUIy7yzGbWx27bjTEFuI9HcJJ2D+XU+sB8Tt81Dq4fbVd45eXI2xuKsNn/ZYGHNI1BcXNp7mwUFQdgeXZxOP6vd8fiqe5wqpSWqn2l9/fkTaV3GXKXJk3BB3KqJZlAEAQFYaQMbyelltNmlLQ3NtRUsO3Pixp4dp8Fe4dhyyVasvJf6yvubn+ECtgABkBkFfEEysAIAgCAICb4DxrJapI7ddZC+3khscjjmaf8A6/LuVTiGHKqnUprtfn9ku3uHDsy2/Bb7SHNBBzB4hc2WZlARLSNiF1lswhpX6tbV5sjI3sb7zvMAdp7FY4ba8ernLur3kRrqrohkt2UoNi6oqjKwDbtdsrbtVCmt1M+eXeQ3c0cydwHetdWtTox1VHkj1CEpvKKJvQ6K6yRgdXXOGB3FkURky8SR8lUzxqCfYhn9cvUlxspdWeyr0U1DWF1Hdonuy2MlgLc/3Bx+SxDGo/yh9/0Zdk+kiFXqx3GxziK5Uzo9b2JB1mP7nfTerShc0q6zpv1Ik6cqbykjnLeeAsgtfRViB1ZRvs9U/WmpW60BJ2ui3ZftOQ7iFzmLWqhPix2e/n+yxtKupaH0LAVOTSjdItyNxxVVAOzipcqdnLZ7X9RPwXV4ZR4dsvF8youZ6qr+RGlPNBt2i3T3e5U9BSj1szsszuaOLj2AZla61aNGm6ktkeoQc5KKL6sFlo7Fb2UlFGA0bXvPtSO/Ee1cfXrzrz1z/wCFxTpxpxyidJaTYEBq3K30tzopKSthbLDIMnNPzHI9q906k6U1ODyaPMoqSyZRGKLHLh+8S0MhL4/bhkI9th3Hv3g9y660uY3FJTW/XzKerTdOelnJUk1nTwxcnWm/0NaDk1kobJt3sdsd5HPwUe7pcahKHyNlKeiakfQWY5+a4vUXXI+cKyY1FZUVB3zSvkPiSfqu6hHTBR8EiibzbZ6V6MFh6HKNsldca1w60MbI2HlrEk/2hUuNTyjCHjmybZR7TkWoufLEIAgCAr3TDRsda6GtDR6SKcxZ/lc0n5tCucGm1UlDxX4IV7HsqRVS6ErjDhm0jmFlB7E8/jib8RVL/wCciZ8QQeeMwzyxO9qN7mHvByVxF5pMiPk8jwWTBZGhupaJbpSuI1i2ORo5gawPzCo8ajyhLzX4J1k+ckWeqEsAgCAICBaYKlrLDSU+fXlqgcuxrXZ+ZCt8GjnWlLwX+oh3ssoJFSroytME5DPkshkm/hSp5Ku+NiSOAzTxlRmhxTc4ciAZzI3uf1vqt1jU4lvB/LL+uR4rR01GjjKUajqYZvElhvVPXxgua06srB77DvH1HaAo91bq4pOm/p5mylU4c1IvugrKevpIqqkkbLDK3WY9u4hcfOEqcnGSyaLmMlJZo2F5MhAeE0rIY3SSvaxjAXOc45AAcSspNvJBvIozHOIBiG9GWEnokAMdPnxGe13ifIBdZYWvw9LJ95836FRcVeJPNbIjymmg2LfSOr7hTUbQSaiVsezkTkV4q1OHBz8Eeox1NI+h+iwf6TVxGt+JdaYlZaYLb6KuormxvVlYYJDyc3a34gu/4roMGq5wlSfTmQL2GUlIr1XRCCA7WG8UXLDsh6G9r6dzs5KeTax3aOR7R45qLc2VK5Xa38TbSrTp90sKg0oWiWMdNpqqmk45NEjfAjb5KlqYPWXcaf2Jsb2D3WR7KvSdY4oyaaKrqH8GiPUHxJWIYPcN9rJe/kZd5Ty5cyBYnxlcsQtMEmrTUWefR4iet+o8fIdit7XD6Vv2t5ePoQ6txOpy6EcU40BATDRZbTW4mFU5ucVFGZCfzu6rR/cfBVmLVdFvp6y/HX/CVaQ1VM/AubVC5gs8kcXGVo+2sPVVIxuc2r6SH9bdo+O7xUqzr8CvGb26+Rrr09dNpblB+BHeuxKYLACAIAgCAIAgLp0ZWj7Mw3HNKzVnrT6Z2e8NPsD4bfFctilfi3DS2jy9S1tKeinm92S5VxJBQFJaR7IbRiF80TNWlrc5mZbg732/Hb+5dThlxxqGl7x5ehU3NPRPlsyKqxI4QBAEAQBAdnCNldfb9TUZbnAD6Sc8oxv+OweKi3lx8PRc+uy8zbRp8SaiX4xoa0NAAAGQA4Ljy5PJAEBwMa2EX+xy07AOkx+spyeDxw8RmPFS7K5+HrKT2fJ+Rpr0uJBpblDkOa4te0tcDkWkZEHkuvzz2KcIAgCAIDBIG0oC6NGtgNosoqqhmrV1uUjwRtYz3W+efj2LlsTueNW0x2j+epaWtLRDN7smCriUEAQAoCotKWHug3AXelZ92qnZTADYyXn3O+YPNdHhN1rhwZbrby/RW3dLTLWtmQVW5DCAIAgJRo+w99uXlss7M6GkIfLmNj3e6z6nsHaq/EbrgUso95+2yRb0uJPnsi7wuVLYIAgCAIDUutBT3S3z0VWzWhmbquA3jtHaN4WylVlSmpx3R5nFTjpZQN8tVRZbpNb6odeM9Vw3Padzh3/5HBdhb1416aqR6lNODhJxZorceAgPdRUk9dVw0lKwvnmcGMbzP+F5qTjTi5y2RlRcnki/MNWWGw2mGhg6xaNaSTLbI87z/wC4ZLjrm4lcVXOXtFzSpqnHSjqrQbAgCAIAgCAiekDDIvts9NSsHT6YF0X+43izx4dveVYYfefD1Mpd17+pGuaPEjmt0UoQQSCCCNhBGRC6oqgdgQFtaMcLmgpftevjyqqhvqWOG2OM8e8/LLtXOYpecSXChst/m/0WVpR0rXLdk9VQTAgCAIAgCAIAgKs0nYV9A998oI/VvP3tjfdP4+48e3bzV/hd7mlQnv09PQr7qjk+JH6nN0dYV+2a0XCtZ9wp3bGuGyZ44dw4/Dmt+J3vBjw4d5/ZGu2o63qeyLkAyC5ktDKAIAgCAIAgCAIDwnY2SF7JGhzXNIc1wzBHJZTaeaMPY5+Go44sP25kTGsaKZhDWjIbWjNbblt1pt+J5ppKCyOmtJ7CAIAgCA//2Q=="
          alt=""
        />
        <div className="addHead">Address</div>
        <div className="addPara">Mancheswar,Odisha</div>
        <img
          className="addImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAilBMVEX///8AAP/6+v/9/f/z8//k5P/v7//r6//19f9WVv9NTf/p6f/39//Fxf+Vlf/W1v8cHP8NDf9wcP9sbP/g4P8VFf+Njf9lZf9dXf9TU//Kyv+hof+trf88PP8vL/90dP81Nf/Pz/+zs/+9vf+IiP+Dg/+4uP8kJP97e/9CQv+oqP9HR//b2/+bm/9cIgZpAAADxUlEQVRogcWb63aiUAyFDVdFQNFSL60I2optnfd/veltHCucnAQTuv+2a30LyElOduJggMiNPQf7u5pO9wVANkt6BztpDl+a+/2SgyWcVZz6JN9t4EL1pD9yVcMP5b298wNcq+4p0u8bZIBFH+DhvIUM8KBPDpetZJiqh1qwaicDLJU/dzwykQFeddHt3/lbqicsxcgwUiSvUTLATo0cTy3oaaCFfraQAZ6VyJWVDKBzuB3kXJ21cjXQzZrRJo07ixOR0JFCTktIZIC9PHpBRM/FyX5GRNfi6fSVSFYo3G9k9FaYHJLJUAjHODW+3zWNZdFPdHQ+lkUbLmStaNny5ZS/9sJ9Ohki2QpyYqCFz/WETpbOZns6OpUlD3Zk8moojH6kkgvx4vHwa2TqU288cTLxXiZ/SxjY245P3WuQKec6V2o076zkF63OPrTdzLZqfb27wcnSKexSeL3WCbBvtflVZ21UXRT0bqbQcFwIC/E6VEUPCjNa2yjcmtEq+fNCyMfWRg/NFo66M2tucjVK5Q8hdfNOGR2YuwBlcxRru9600ZX5jVfK6NjohIt38w2ZL+OZ9gRgaA60mTJ68Mf8tbXne7EZHSmjscd+VEY7yO1Q2EFpCHnsuYod/V8e4qloj/eQRjtb66Jdc0qDF+XiWZnR6okFG/toNiEDtG4DHHTZmJukXUewkWqpm1kCBA0rtdnip1AXbaE7QUenP0dVNJZPqexwnSTrDtdofB5BON776KsIFimbjpQwAntymY6PTLiDD/tw9pX3OE15yT9EGm7A3ZXmwkPEy0QVijbP793WTp1X7C2WbdRujAeGAfyMlQ6OOLtoCx/faMC9caLNQa4NH5o2d0XGiPVXczq30OIhwvEqoQcv2H/nHBNsYltUKQ+Xn3Bs2zngBJt9EjRKzvA1fh4/9MRgEybqZZq8v3f/QBqLcmoPvhDF15IxrEK8vE5a0KexLnV1gyrGldpjzLZJYsSaR9vToYuxTIRnCr5yRhENbGmNKc5AA21J+GJt63myz83ql0PRWOONkALJM8bcURwK5hZ2tyyXU/kNK347p6vLliBtxG5VJ0Oosl8H7Oroi/iUbVNcnVdwY8Z+mOQzf+q2D36bz3tLZrvZcqSu0FxrKjAym3RKq6XIMk/8WNtRVxpJOV9jbl49Ci5tTThnPBP+IcGa/Mm38jbjBP2lyD9FOqNJP7Xl9WWi5jB6ydZMr2eV7sAm3D+tms14Xh532kOqD8V+8vA8KrIsew/nLCuX6etJ10a+kus4XhAOHcf+lv8CSsU2ZyV0/DEAAAAASUVORK5CYII="
          alt=""
        />
        <div className="phoneHead">Phone</div>
        <div className="phonePara">+91 1234567890</div>
        <div className="phonePara">+91 9876543210</div>
        <img
          className="mailImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWoE5InIZGKVvdmRH_5owdGzOBfWbrs0k6Q&usqp=CAU"
          alt=""
        />
        <div className="emailHead">Email</div>
        <div className="emailPara">srghadei0@gmail.com</div>
        <div className="emailPara">kumarranjan@gmail.com</div>
      </div>
      <div className="contactUsLine"></div>
      <div className="rSide">
        <div className="contactHead">
          <p>Send us a message</p>
        </div>
        <div className="contactPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          pariatur nesciunt nihil ametEt tempora iure blanditiis consequatur
          optio repudiandae atque sed.
        </div>
        <div className="contactForm">
          <form action="">
            <input
              className="formTxt"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={changeHandler}
            />
            <input
              className="formTxt"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={changeHandler}
            />
            <input
              className="textarea"
              type="textarea"
              name="textarea"
              placeholder="Enter Your Message"
              onChange={changeHandler}
            />
            <button className="contactUsBtn" onClick={submitHandler}>
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailList;
