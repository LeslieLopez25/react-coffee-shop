import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: hsl(10.2, 93.7%, 12.4%);
  color: hsl(0, 0%, 100%);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px hsl(24.5, 57.6%, 33.3%);
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: hsl(3.4, 98.7%, 31.2%);
  color: hsl(0, 0%, 100%);
  transition: 0.2 ease-out;

  &:hover {
    background: hsl(32.9, 100%, 50%);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: hsl(0, 16.7%, 7.1%);
  }
`;
