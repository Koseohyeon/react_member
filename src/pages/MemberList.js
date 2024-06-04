  import React, { useEffect, useState } from 'react'
  import Member from '../components/Member'
  import axios from 'axios';

  export default function MemberList() {

    const [members, setMembers] = useState([]);

    useEffect(()=> {
      // 초기화
      axios.get("http://localhost:8088/api/memberlist")
      .then((res) => {
        console.log("data: ", res.data);
        setMembers(res.data);
      })
      .catch((error) => {
        console.log("오류 발생!!!!");
        console.log(error);
      })
    }, []);

    return (
      <div>
          <h1>회원 리스트 페이지</h1>
          <div>
          {
            members.map((member) => 
              <Member key={member.id} member={member} />
            )
          }
          </div>
      </div>
    )
  }
