import styled from 'styled-components';

export const CartItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid lightblue;
	padding: 20px 0;
`;

export const CartItemInformationContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const CartItemInformation = styled.div`
	display: grid;
	gap: 10px;
`;

export const CartItemTitle = styled.h3``;
export const CartItemData = styled.span``;

export const CartItemImage = styled.img`
	max-width: 80px;
	object-fit: contain;
	margin-left: 40px;
`;
