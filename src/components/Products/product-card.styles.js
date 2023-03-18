import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: hsl(10.2, 93.7%, 12.4%);
  color: hsl(0, 0%, 100%);
  width: 100%;
  min-height: 100%;
  padding: 5rem calc((100vw - 81.25rem) / 2);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductSection = styled.div`
  line-height: 2;
  width: 18.75rem;
  margin: 0 2rem;
`;

export const ProductImg = styled.img`
  min-width: 18.75rem;
  max-width: 100%;
  height: 18.75rem;
  box-shadow: 0.5rem 0.5rem 1rem hsl(24.5, 57.6%, 33.3%);
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductButton = styled.button`
  background: hsl(3.4, 98.7%, 31.2%);
  color: hsl(0, 0%, 100%);
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  transition: 0.2 ease-out;

  &:hover {
    background: hsl(32.2, 30.8%, 73.9%);
    color: hsl(0, 16.7%, 7.1%);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
