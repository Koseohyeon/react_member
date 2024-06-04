import React, { useEffect, useState } from 'react';
import Member from '../components/Member';
const MemberList = () => {

    const [member,setMembers]= useState([]);
    useEffect(()=>{
      //초기화

    },[]);


    return (
      <div>
        <h1>회원 리스트 페이지</h1>
       {
        MemberSave.map((member) => {
          <Member key={member.id} member={member} />
        })
       }

      </div>
    );
  };

export default MemberList;