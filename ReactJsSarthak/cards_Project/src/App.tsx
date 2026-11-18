
import Card from "./components/Card";
import "./index.css";

const jobs = [
  {
    id: 1,
    company: "Amazon",
    img : "https://imgs.search.brave.com/rvQqR7akSxN_njsnKGJTAfTiIX366OoCuygWiUj0__8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2Lzg1LzczLzIw/LzM2MF9GXzE2ODU3/MzIwNzZfVWQ4R05E/SU5aenBGMUR6WkFi/VVpkZldQbnBOVjBt/SjMuanBn",
    posted: "5 Days ago",
    title: "Senior UI/UX Designer",
    employmentType: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
     img : "https://imgs.search.brave.com/9Kmo6UdN12-dgqROtjGff7RaLQWvv0J2mNbjuw9VTi0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzU3LzMyLzQ2/LzM2MF9GXzEzNTcz/MjQ2MjhfYUd2bUxK/OE1UMmNORWtwaHda/R0R6MU5IMWpqckR2/bVguanBn",
    posted: "2 Days ago",
    title: "Frontend Developer",
    employmentType: "Full-Time",
    level: "Mid Level",
    salary: "$95,000/yr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Meta",
     img : "https://imgs.search.brave.com/_sxCSFUgUCoyrW8o8BZHi3aem42UvWFZzsLKS7szBWc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9tZXRhLWlj/b24ucG5n",
    posted: "1 Day ago",
    title: "Backend Software Engineer",
    employmentType: "Full-Time",
    level: "Senior Level",
    salary: "$145,000/yr",
    location: "London, UK",
  },
  {
    id: 4,
    company: "Microsoft",
    posted: "3 Days ago",
     img : "https://imgs.search.brave.com/w-wqusCQXewy93UN-26Cnqm0RiJ91ljTvHYq_sY2AEI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW1pY3Jvc29mdC1s/b2dvLWljb24tc3Zn/LWRvd25sb2FkLXBu/Zy0yMjg0OTM4LnBu/Zz9mPXdlYnAmdz0x/Mjg",
    title: "Full Stack Developer",
    employmentType: "Full-Time",
    level: "Mid Level",
    salary: "$110,000/yr",
    location: "Hyderabad, India",
  },
  {
    id: 5,
    company: "Apple",
    posted: "Today",
     img : "https://imgs.search.brave.com/17nhgUctw77_p2BhBXTidPFlggNdOGQs5yPIduwRUKM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9z/Zi1ibGFjay8xMjAw/L21hYy1vcy5qcGc",
    title: "Product Designer",
    employmentType: "Contract",
    level: "Senior Level",
    salary: "$130/hr",
    location: "California, USA",
  },
  {
    id: 6,
    company: "Netflix",
    posted: "4 Days ago",
     img : "https://imgs.search.brave.com/Vh-fPsum6IApNAk57_Tdu4-oEyP-u__s2iBdA97eIjI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9uZXRmbGl4LWxv/Z28taWNvbi5zdmc",
    title: "Software Development Engineer",
    employmentType: "Full-Time",
    level: "Senior Level",
    salary: "$160,000/yr",
    location: "Los Angeles, USA",
  },
  {
    id: 7,
    company: "Adobe",
    posted: "6 Hours ago",
     img : "https://imgs.search.brave.com/FjIpxRDs-0UKOrRSYXJOtCTKeRPyGVGJW3C-vHDBTMg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLm1h/Z25pZmljLmNvbS8y/NTYvMjMzNS8yMzM1/NDExLnBuZz9zZW10/PWFpc193aGl0ZV9s/YWJlbA",
    title: "React.js Developer",
    employmentType: "Full-Time",
    level: "Entry Level",
    salary: "$75,000/yr",
    location: "Noida, India",
  },
  {
    id: 8,
    company: "Uber",
    posted: "Yesterday",
     img : "https://imgs.search.brave.com/BwdtDDe1dqVkzV96uANZpezXb_NAWLWAD3tdUkmSuvk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS91YmVyLWlj/b24ucG5n",
    title: "Node.js Backend Engineer",
    employmentType: "Full-Time",
    level: "Mid Level",
    salary: "$105,000/yr",
    location: "Gurgaon, India",
  },
  {
    id: 9,
    company: "NVIDIA",
    posted: "2 Days ago",
     img : "https://imgs.search.brave.com/fAhSTqKoe9tQORkSVsePn8b7vxrJ3165DbOrr6XxuH0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZFhvajVEdUNF/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc2NTk0NjE0MjEx/Nw",
    title: "Machine Learning Engineer",
    employmentType: "Full-Time",
    level: "Senior Level",
    salary: "$150,000/yr",
    location: "Santa Clara, USA",
  },
  {
    id: 10,
    company: "Spotify",
     img : "https://imgs.search.brave.com/QCAzqphs0lIP4AWXiiuKAioau2UHfNXbic8jgnlOXyo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLm1h/Z25pZmljLmNvbS8y/NTYvMzY3MC8zNjcw/MjU2LnBuZz9zZW10/PWFpc193aGl0ZV9s/YWJlbA",
    posted: "3 Hours ago",
    title: "UI/UX Designer",
    employmentType: "Remote",
    level: "Mid Level",
    salary: "$90,000/yr",
    location: "Remote, Worldwide",
  },
];

export function App() {
  return (
    <div className="feed">
      {
        jobs.map(function(data ){
           return (
            <div key={data.id}>
              <Card company={data.company} posted={data.posted} title={data.title} employmentType={data.employmentType} level={data.level} salary={data.salary} location={data.location}  img={data.img}/>
            </div>
           )
        })
      }
    </div>
  );
}

export default App;
