import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;
/*<applet code></applet>*/
public code="GridBag" width=300 height=300 extends Applet implements ActionListener {
    private TextField nameTextField;
    private TextArea commentsTextArea;
    private Button submitButton;

    public void init() {
        setLayout(new GridBagLayout());

        // Create and add components
        Label nameLabel = new Label("Name:");
        nameTextField = new TextField(20);
        Label commentsLabel = new Label("Comments:");
        commentsTextArea = new TextArea(5, 20);
        submitButton = new Button("Submit");
        submitButton.addActionListener(this);

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(5, 5, 5, 5); // Padding

        gbc.gridx = 0;
        gbc.gridy = 0;
        add(nameLabel, gbc);

        gbc.gridx = 1;
        add(nameTextField, gbc);

        gbc.gridx = 0;
        gbc.gridy = 1;
        add(commentsLabel, gbc);

        gbc.gridx = 1;
        add(commentsTextArea, gbc);

        gbc.gridx = 0;
        gbc.gridy = 2;
        gbc.gridwidth = 2; // Span across two columns
        add(submitButton, gbc);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == submitButton) {
            String name = nameTextField.getText();
            String comments = commentsTextArea.getText();

            // Handle the submission (you can define your logic here)
            // For this example, we will just display the input in a dialog box.
            String message = "Name: " + name + "\nComments: " + comments;
            JOptionPane.showMessageDialog(this, message, "Submission", JOptionPane.INFORMATION_MESSAGE);

            // Clear the text fields after submission
            nameTextField.setText("");
            commentsTextArea.setText("");
        }
    }
}
