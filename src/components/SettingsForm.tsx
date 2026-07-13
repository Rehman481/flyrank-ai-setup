import { useState } from "react";
import "./SettingsForm.css";

type Theme = "Light" | "Dark";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SettingsForm = () => {
  const [theme, setTheme] = useState<Theme>("Light");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (validate()) {
      alert("Settings saved successfully!");
    }
  };

  return (
    <div className={`settings-container ${theme.toLowerCase()}`}>
      <h1>Settings</h1>

      <form onSubmit={handleSubmit} noValidate>

        <label htmlFor="fullName">Full Name</label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          aria-invalid={!!errors.fullName}
        />

        {errors.fullName && (
          <small>{errors.fullName}</small>
        )}

        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />

        {errors.email && (
          <small>{errors.email}</small>
        )}

        <label htmlFor="password">Password</label>

        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          aria-invalid={!!errors.password}
        />

        {errors.password && (
          <small>{errors.password}</small>
        )}

        <label htmlFor="confirmPassword">
          Confirm Password
        </label>

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          aria-invalid={!!errors.confirmPassword}
        />

        {errors.confirmPassword && (
          <small>{errors.confirmPassword}</small>
        )}

        <label htmlFor="theme">Theme</label>

        <select
          id="theme"
          value={theme}
          onChange={(e) =>
            setTheme(e.target.value as Theme)
          }
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>

        <button type="submit">
          Save Settings
        </button>

      </form>
    </div>
  );
};

export default SettingsForm;