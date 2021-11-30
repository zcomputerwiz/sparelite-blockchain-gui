import React, { useState } from 'react';
import { Trans } from '@lingui/macro';
import { AlertDialog, Amount, Fee, Back, ButtonLoading, Card, Flex, Form } from '@sparelite/core';
import { Box, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { sparelite_to_graviton } from '../../../util/sparelite';

type CreateCATWalletData = {
  amount: string;
  fee: string;
};

export default function WalletCATCreateNew() {
  const history = useHistory();
  const methods = useForm<CreateCATWalletData>({
    shouldUnregister: false,
    defaultValues: {
      amount: '',
      fee: '',
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [addCATToken, { isLoading: isAddCATTokenLoading }] = useAddCATTokenMutation();

  async function handleSubmit(values: CreateCATWalletData) {
    try {
      const { amount, fee } = values;
      setLoading(true);
      /* fee and amount is optional
      if (//!amount ||
        // Number(amount) === 0 ||
        // !Number(amount) ||
        isNaN(Number(amount))
      ) {
        dispatch(
          openDialog(
            <AlertDialog>
              <Trans>Please enter a valid numeric amount</Trans>
            </AlertDialog>,
          ),
        );
        return;
      }
      
      if (fee === '' || isNaN(Number(fee))) {
        dispatch(
          openDialog(
            <AlertDialog>
              <Trans>Please enter a valid numeric fee</Trans>
            </AlertDialog>,
          ),
        );
        return;
      }
      */

      const amountGravitons = sparelite_to_graviton(amount || '0');
      const feeGravitons = sparelite_to_graviton(fee || '0');


      /*
      const response = await dispatch(create_cc_action(amountGravitons, feeGravitons));
      if (response && response.data && response.data.success === true) {
        history.push(`/dashboard/wallets/${response.data.wallet_id}`);
      }
      */
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <Flex flexDirection="column" gap={3}>
        <Back variant="h5">
          <Trans>Create New Spare Asset Token Wallet</Trans>
        </Back>
        <Card>
          <Grid spacing={2} container>
            <Grid xs={12} md={6} item>
              <Amount
                name="amount"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} md={6} item>
              <Fee
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Card>
        <Box>
          <ButtonLoading
            type="submit"
            variant="contained"
            color="primary"
            loading={loading}
          >
            <Trans>Create</Trans>
          </ButtonLoading>
        </Box>
      </Flex>
    </Form>
  );
}
