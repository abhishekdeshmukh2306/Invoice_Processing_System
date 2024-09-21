
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography, styled } from "@mui/material";

const StyledTable = styled(Table)({
  width: '80%',
  margin: 20,
  marginTop: 40,
  '& > tbody > tr > td': {
    fontSize: 16
  },
  '& > tbody > p': {
    fontSize: 18,
    marginTop: 15
  }
});

const Invoices = ({ invoices, removeInvoice }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Vendor</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          invoices && Array.isArray(invoices) && invoices.length > 0 ?
            invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.vendor}</TableCell>
                <TableCell>{invoice.product}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success" onClick={() => removeInvoice(invoice.id)}>
                    Mark Done
                  </Button>
                </TableCell>
              </TableRow>
            ))
            :
            <Typography>No Pending Invoices</Typography>
        }
      </TableBody>
    </Table>
  );
}

export default Invoices;