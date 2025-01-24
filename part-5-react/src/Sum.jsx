export default function Sum({num}){
          let i=0;
          let ans=0;
          let n=num;
          while (n!=0) {
             n%=10;
             ans+=n;
             n/=10;
          }

          return(
           {ans}
    );
}
