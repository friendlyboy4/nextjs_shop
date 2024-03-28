import styled from "styled-components";

const DataContainer = styled.div`
  font-size: 1rem;
  line-height: 1.4;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  @media (max-width: 768px) {
  }
`;

const DataLine = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1px;
`;

const DataCell = styled.div`
  font-size: 1.5em;
  width: 50%;
  margin-right: 1px;
  padding: 2px;
  border: 1px solid #00000033;
`;

export default function DataSection({ data }) {
  const { type, material, size, brake_type, wheel_size, tyre_clearance } = data;
  return (
    <DataContainer>
      <DataLine>
        <DataCell>
          <b>Type:</b>
        </DataCell>
        <DataCell>{type}</DataCell>
      </DataLine>
      <DataLine>
        <DataCell>
          <b>Material:</b>
        </DataCell>
        <DataCell>{material}</DataCell>
      </DataLine>
      <DataLine>
        <DataCell>
          <b>Size:</b>
        </DataCell>
        <DataCell>{size}</DataCell>
      </DataLine>
      <DataLine>
        <DataCell>
          <b>Brake type:</b>
        </DataCell>
        <DataCell>{brake_type}</DataCell>
      </DataLine>
      <DataLine>
        <DataCell>
          <b>Wheel size:</b>
        </DataCell>
        <DataCell>{wheel_size}</DataCell>
      </DataLine>
      <DataLine>
        <DataCell>
          <b>Tyre clearance:</b>
        </DataCell>
        <DataCell>{tyre_clearance}</DataCell>
      </DataLine>
    </DataContainer>
  );
}
