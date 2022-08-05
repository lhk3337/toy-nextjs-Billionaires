export default function Navbar() {
  return (
    <nav>
      <h1>Billionaires</h1>
      <style jsx>{`
        nav {
          padding: 2.25rem;
          padding-left: 3rem;
          margin-bottom: 2rem;
          border-bottom: 12px solid black;
        }
        h1 {
          font-weight: bold;
          font-size: 8rem;
          line-height: 80px;
          transition: all 0.5s;
        }
        @media (max-width: 1280px) {
          nav {
            padding: 1.525rem;
            padding-left: 3rem;
          }
          h1 {
            font-size: 7rem;
            transition: all 0.7s;
          }
        }
        @media (max-width: 1024px) {
          nav {
            padding: 0.725rem;
            padding-left: 3rem;
          }
          h1 {
            font-size: 6rem;
            transition: all 0.7s;
          }
        }
        @media (max-width: 768px) {
          nav {
            padding: 0.525rem;
            padding-left: 3rem;
          }
          h1 {
            font-size: 5rem;
            transition: all 0.7s;
          }
        }
        @media (max-width: 640px) {
          nav {
            padding: 0.325rem;
            padding-left: 3rem;
          }
          h1 {
            font-size: 4rem;
            transition: all 0.7s;
          }
        }
      `}</style>
    </nav>
  );
}
