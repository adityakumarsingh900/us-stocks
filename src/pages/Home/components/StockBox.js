import { Box, Card, Heading } from "grommet";
import { useHistory } from "react-router-dom";

export default function StockBox({ code, name, price, offset}) {
  const history = useHistory();
  return (
    <Card height="small" width="small" background="light-1" onClick={() => history.push(`/detail/${code}`)}>
      <Box align="start" pad="small">
        <Heading margin="none" level="5" color="gray">{code}</Heading><br />
        <Heading margin="none" level="5">{name}</Heading>
      </Box>
      <Box pad="small" fill="vertical" justify="end" align="end">
        <Heading level="5"  margin="none">${price}</Heading>
        {+offset > 0
          ? <Heading level="5"  margin="none" color="green">{offset}</Heading>
          : <Heading level="5"  margin="none" color="red">{offset}</Heading>
        }
      </Box>
    </Card>
  );
}
